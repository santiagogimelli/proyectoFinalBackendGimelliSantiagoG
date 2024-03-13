import nodemailer from 'nodemailer';
import config from '../config.js';
import { enviroment } from '../server.js'
export default class EmailService {
    static #instance = null;

    constructor() {
        this.transport = nodemailer.createTransport({
            service: config.mail.service,
            port: config.mail.port,
            auth: {
                user: config.mail.user,
                pass: config.mail.password,
            }
        })
    }

    sendEmail(to, subject, html, attachments = []) {
        return this.transport.sendMail({
            from: config.mail.user,
            to,
            subject,
            html,
            attachments,
        });
    }

    sendResetPasswordLink(token, email) {
        return this.sendEmail(
            email,
            `Reseteo de clave`,
            // `Este es el link para restaurar la clave ${config.host.localhost}/auth/pass-recovery-by-mail/${token}`
            `Este es el link para restaurar la clave ${enviroment === 'INTERNET' ? config.host.host : config.host.localhost}/auth/pass-recovery-by-mail/${token}`
        )
    }

    static getInstance() {
        if (!EmailService.#instance) {
            EmailService.#instance = new EmailService();
        }
        return EmailService.#instance;
    }
}