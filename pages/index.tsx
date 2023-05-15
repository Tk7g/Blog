import {
  Container,
  Row,
  Col,
  Card,  
} from "react-bootstrap"
import MyNavbar from "@/components/my-navbar"
import Image from 'next/image'
const imageLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};
export default function Home() {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
          
          </Col>          
        </Row>
        <hr />
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image 
                    loader={imageLoader}
                    src="photo-1416339306562-f3d12fefd36f"
                    className="rounded-circle mr-3"
                    height={50}
                    width={50}
                    alt="avatar" />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Алтантуяа Тулгаа
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 05 дугаар сарын 12
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      JAMstack архитектурын тухай
                    </Card.Title>
                    <Card.Text>
                      Статик сайт
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image 
                    loader={imageLoader}
                    src="photo-1416339306562-f3d12fefd36f"
                    className="rounded-circle mr-3"
                    height={50}
                    width={50}
                    alt="avatar" />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Алтантуяа Тулгаа
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 05 дугаар сарын 12
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src={"https://images.unsplash.com/profile-1446404465118-3a53b909cc82"}
                      alt="Card image cap"
                    /> 
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                    loader={imageLoader}
                    src="photo-1581961462133-ca8618e89ed3"
                    className="rounded-circle mr-3"
                    height={50}
                    width={50}
                    alt="avatar" />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Алтантуяа Тулгаа
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 05 дугаар сарын 12
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg"
                      alt="Card image cap"
                    /> 
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image 
                    loader={imageLoader}
                    src="photo-1461988320302-91bde64fc8e4"
                    className="rounded-circle mr-3"
                    height={50}
                    width={50}
                    alt="avatar" />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Алтантуяа Тулгаа
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 05 дугаар сарын 12
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4"
                      alt="Card image cap"
                    /> 
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}
