import passaro from "../../../assets/images/cute-european-robin-daylight.jpg"
import {CardContent, CardText, CardWarpper, Imagen} from "./style.js";


export default function Card() {
    return (
        <CardWarpper>
            <CardContent>
                <Imagen src={passaro} alt=""/>
                <div>
                    <h4>zezinho</h4>
                    <CardText>
                        <p>Porte</p>
                        <p>Raça</p>
                        <p>localizaçao</p>
                    </CardText>
                </div>

            </CardContent>


        </CardWarpper>
    )
}