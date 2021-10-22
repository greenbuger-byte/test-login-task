import { createGlobalStyle} from "styled-components";
import normalize from "./normalize";

export const Global = createGlobalStyle`
    ${normalize}
    * {
        margin: 0rem;
        padding: 0rem;
    }
`;