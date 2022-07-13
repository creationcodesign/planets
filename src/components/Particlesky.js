import Particles from "react-tsparticles"

export default function Particlesky() {
    return (
        <Particles
            id="tsparticles"
            style={{ position: "absolute" }}
            height="95%"
            width="95%"
            params={{
                particles: {
                    color: {
                        value: "#000000"
                    },
                    line_linked: {
                        color: {
                            value: "#000000"
                        }
                    },
                    number: {
                        value: 50
                    },
                    size: {
                        value: 3
                    }
                }
            }}
        />
    )
}
