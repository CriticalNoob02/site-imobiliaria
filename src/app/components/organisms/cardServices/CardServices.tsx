import { Title, Row, Col } from '../../atoms';
import { Cards3D } from '../../molecules';
import CardServicesProps from './types';

export default function CardServices({
    titles,
    links,
    icons,
}:CardServicesProps) {
    return (
        <Col id='Services' height='h-[95vh]'>
            <div>
                <Title
                    title={"Serviços"}
                />
            </div>
            <Row height='h-full'>
                <Cards3D titles={titles} links={links} icons={icons} />
            </Row>
        </Col>
    );
}
