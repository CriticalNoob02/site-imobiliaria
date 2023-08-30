import { Title, Row, Col } from '../../atoms';
import { Cards3D } from '../../molecules';
import CardServicesProps from './types';

export default function CardServices({
    titles,
    icons,
    tag
}:CardServicesProps) {
    return (
        <Col id='Services' height='h-[95vh]'>
            <div>
                <Title
                    title={tag}
                />
            </div>
            <Row height='h-full'>
                <Cards3D titles={titles} icons={icons} />
            </Row>
        </Col>
    );
}
