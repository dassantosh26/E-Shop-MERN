/** @format */
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3 min-vh-100">
        <Container>
          <h1>Welcome to E-Shop </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
