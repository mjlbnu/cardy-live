import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./CountDown.css";

const Countdown = ({ timeLimit = 15 }) => {
    const svgRef = useRef(null);
    const [timePassed, setTimePassed] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const width = 300;
    const height = 300;

    useEffect(() => {
        if (!isVisible) return;

        const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("background", "none"); // Torna o svg transparente

        const arc = d3.arc()
            .innerRadius(width / 3 - 40)
            .outerRadius(width / 3 - 25)
            .startAngle(0);

        const nilArc = d3.arc()
            .innerRadius(width / 3 - 133)
            .outerRadius(width / 3 - 133)
            .startAngle(0)
            .endAngle(2 * Math.PI);

        const field = svg.append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        field.append("path")
            .attr("class", "path path--background")
            .attr("d", arc({ endAngle: 2 * Math.PI }));

        const path = field.append("path")
            .attr("class", "path path--foreground");

        const label = field.append("text")
            .attr("class", "c_label")
            .attr("dy", ".35em")
            .text(timeLimit);

        const updateTimer = () => {
            setTimePassed((prev) => {
                const newTime = prev + 1;
                const remaining = timeLimit - newTime;

                path.transition()
                    .ease(d3.easeCubic)
                    .duration(500)
                    .attrTween("d", () => {
                        const interpolate = d3.interpolate({ value: prev }, { value: newTime });
                        return (t) => arc({ endAngle: (interpolate(t).value / timeLimit) * 2 * Math.PI });
                    });

                label.text(remaining >= 0 ? remaining : "");

                if (remaining <= 10) {
                    label.classed("pulse", true);
                }

                if (newTime < timeLimit) {
                    setTimeout(updateTimer, 1000);
                } else {
                    destroyTimer();
                }

                return newTime;
            });
        };

        const destroyTimer = () => {
            label.transition()
                .ease(d3.easeBack)
                .duration(700)
                .style("opacity", "0")
                .attr("transform", "translate(0,-40)")
                .on("end", () => label.remove());

            path.transition()
                .ease(d3.easeBack)
                .duration(700)
                .style("opacity", "0") // Agora aplica opacidade ao arco também
                .attr("d", nilArc)
                .on("end", () => path.remove()); // Remove o arco após a animação

            d3.select(".path--background").transition() // Transição para o arco de fundo também
                .ease(d3.easeBack)
                .duration(700)
                .style("opacity", "0")
                .on("end", function () { d3.select(this).remove(); });
            
            setTimeout(() => setIsVisible(false), 700); // Remove a div após a animação
        };
        updateTimer();
    }, [timeLimit, isVisible]);

    if (!isVisible) return null; // Se isVisible for false, não renderiza nada
    return <div className="c_container" style={{ background: "none" }}><svg ref={svgRef} style={{ background: "none" }}></svg></div>;
};

export default Countdown;
