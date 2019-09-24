import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
export default () => (
	<div>
		<Head>
			<title>Test App</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossorigin="anonymous"
			></link>
		</Head>
		<Container fluid>
			<Row>
				<Col>
					<Button>Test</Button>
				</Col>
			</Row>
		</Container>
	</div>
);
