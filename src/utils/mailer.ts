import Email from "next-auth/providers/email";
import nodemailer from "nodemailer";

export async function sendLoginEmail({
	email,
	url,
	token,
}: {
	email: string;
	url: string;
	token: string;
}) {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false,
		auth: {
			user: testAccount.user,
			pass: testAccount.pass,
		},
	});

	const info = await transporter.sendMail({
		from: '"Jane Doe" <j.doe@example.come>',
		to: email,
		subject: "Login to your account",
		html: `Login by clicking <a href="${url}/login#token=${token}">Here</a>`,
	});

	console.log(`preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}
