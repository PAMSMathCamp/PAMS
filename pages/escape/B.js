import EscapeForm from "../../components/form";

export default function B() {

    return (
        <EscapeForm
            title="B"
            instruction="Submit your answer to B here."
            answer={1}
            next="Congrats! That's the second number of the combination."
        />
    )
}