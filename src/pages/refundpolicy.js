import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

const refundpolicy = () => {
	return (
		<Layout>
			<Container>
				<div className="mt-5">
					<h2 className="mb-4">Refund Policy:</h2>
					<p>
						At "I And You Being Together," we strive to ensure your satisfaction with our services. However, please note that we do not provide refunds. Once a purchase is made, it
						is considered final. We encourage our customers to carefully review their selections before completing any transactions.
					</p>
					<p>
						Exceptions may be made in rare circumstances, such as if there was a technical error on our part that resulted in an incorrect purchase or if there are extenuating
						circumstances beyond your control. In such cases, please contact our customer support team, and we will do our best to address your concerns.
					</p>
					<p>
						Thank you for choosing "I And You Being Together." We appreciate your understanding of our refund policy. If you have any questions or need further assistance, please
						don't hesitate to reach out to us.
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default refundpolicy;
