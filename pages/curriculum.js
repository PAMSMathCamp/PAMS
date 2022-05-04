const Topic = (props) => {
    return (
        <div className="aspect-square">
            {props.t}
        </div>
    )
}

const topics = [
    ["Basic Triangle Geometry", "Intro to Counting and Probability", "Primes", "Intro to Sequences"],
    ["Circle Geometry", "Competition Strategies", "Numeric Bases", "Pascal's Triangle"],
    ["3D Geometry", "Calculus Preview", "Modular Arithmetic", "Intro to Graph Theory"],
]

export default function Curriculum () {
    return (
        <div className="text-lg">
            <div className="text-4xl font-bold mb-5">Curriculum</div>

            <div>
                PAMS Math Camp offers topics in not only standard math curricula 
                but also in competition math and higher mathematics. Our full list
                of topics may be found <a 
                    target="_blank"
                    rel="noreferer noopener"
                    href="https://docs.google.com/spreadsheets/d/1TlXZw7zvU3CRp7NG8a19Xr1EVq0gn03BrEEd_tpTq8Q/edit#gid=737497406"
                    className="underline"
                >
                    here
                </a>.
            </div>
            {/* <div className="grid grid-cols-6">
                <div></div>
                <Topic t="Triangle Geometry" />
                <div>Introduction to Counting and Probability</div>
                <div>Primes</div>
                <div>Sequences</div>
            </div> */}
        </div>
    )
}