import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Grid,
  Container,
  Divider,
  Flag,
  Header,
  Image,
  Icon,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>semantic ui</h1>
      <Grid container columns={3}>
        <Grid.Column>
          <Button primary>Button Pertama</Button>
          <Button secondary>Button Kedua</Button>
          <Button basic color="red">
            Kirim Pertama
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Flag name="id" />
          <Flag name="ps" />
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" color="blue">
            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
            Andra Darmawan
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal>Batas</Divider>

      {/* text */}
      <Container>
        <Container textAlign="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            commodi provident alias, reiciendis suscipit illum consectetur eos
            earum eum asperiores, nostrum iure quia quasi amet modi quibusdam
            exercitationem similique nemo unde magnam repellendus. Repudiandae
            at ab magni nemo consectetur delectus voluptates fugiat, possimus
            tempore, nobis placeat? Aut voluptatem consectetur explicabo?
          </p>
        </Container>
        <br />
        <Container textAlign="center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            nulla. Sunt cumque fugit omnis quod tempora inventore natus labore
            velit dicta atque. Officiis explicabo tempora ut eaque eius
            laudantium odit, illo repudiandae dolorum ea cum, reiciendis omnis
            perspiciatis iure in sunt maiores ducimus nostrum excepturi quaerat
            quia! Voluptatibus, quibusdam blanditiis?
          </p>
        </Container>{" "}
        <br />
        <Container textAlign="right">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem est
            eligendi quisquam, officiis itaque sint optio aut recusandae
            reiciendis. Minima recusandae expedita obcaecati, possimus rerum
            ducimus consequatur veritatis rem ex deserunt, voluptas nemo
            excepturi nobis repudiandae tenetur accusantium officia! Autem illum
            eos quibusdam, aspernatur debitis nesciunt eligendi voluptas
            deleniti laborum.
          </p>
        </Container>
        <Container textAlign="justified">
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod modi
            facilis quae doloribus eos velit ipsum, deserunt dignissimos vitae,
            perferendis consequuntur ducimus exercitationem doloremque eligendi
            incidunt quis repudiandae dolorum distinctio vel suscipit.
            Doloremque deserunt ex aspernatur accusamus nulla, dicta debitis.
            Optio dolor adipisci magnam, laudantium voluptatem ut quaerat nihil
            recusandae.
          </p>
        </Container>
      </Container>
      <Container textAlign="center">
        <Icon name="spinner" size="big" loading />
        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" size="tiny" href="https://google.com" target="_blank"/>
      </Container>
    </div>
  );
}

export default App;
