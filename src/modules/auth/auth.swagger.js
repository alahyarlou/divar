/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth Model and Routes
 */

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Login with OTP
 *     tags: [Auth]
 *     description: Endpoint for logging in with OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 description: The phone number to send OTP
 *             required:
 *               - mobile
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 description: The phone number to send OTP
 *             required:
 *               - mobile
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /auth/check-otp:
 *   post:
 *     summary: check otp for login user
 *     tags: [Auth]
 *     description: Endpoint for checking otp send
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 description: The phone number to check OTP
 *               code:
 *                 type: string
 *                 description: The OTP send code
 *             required:
 *               - mobile
 *               - code
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 description: The phone number to check OTP
 *               code:
 *                 type: string
 *                 description: The OTP send code
 *             required:
 *               - mobile
 *               - code
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: logout user
 *     tags: [Auth]
 *     description: Endpoint for logout user's login
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal Server Error
 */
