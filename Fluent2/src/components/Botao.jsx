import {FluentProvider, webDarkTheme, Button} from "@fluentui/react-components";

const Teste = () => {
    return (
        <FluentProvider theme={webDarkTheme}>
            <Button appearance="primary">Hello Fluent UI React</Button>
        </FluentProvider>
    );
}

export default Teste