import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

const cancellationpolicy = () => {
	return (
		<Layout>
			<Container>
				<div className="mt-5">
					<h2 className="mb-4">Cancellation Policy:</h2>
					<p>
						At "I And You Being Together," we prioritize commitment and reliability in our services. Therefore, we regret to inform you that we do not offer cancellations once a
						booking or reservation has been made. We understand that unforeseen circumstances may arise, but our policy remains firm in ensuring consistency and fairness to all our
						clients.
					</p>
					<p>
						We encourage our customers to carefully consider their plans before finalizing any arrangements with us. In the event of unavoidable changes, we suggest reaching out to
						us as soon as possible to discuss potential alternatives or adjustments.
					</p>
					<p>Please note that this policy applies to all our services, including but not limited to bookings, reservations, and appointments.</p>
					<p>Thank you for your understanding and cooperation.</p>
					<p>Sincerely,</p>
					<p>I And You Being Together Foundation</p>
				</div>
			</Container>
		</Layout>
	);
};

export default cancellationpolicy;
