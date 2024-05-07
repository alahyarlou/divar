/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category Model and Routes
 */

/**
 * @swagger
 * /category/create:
 *   post:
 *     summary: create new category
 *     tags: [Category]
 *     description: Endpoint for category
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               icon:
 *                 type: string
 *               parent:
 *                 type: string
 *             required:
 *               - name
 *               - slug
 *               - icon
 *               - parent
 *     
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               icon:
 *                 type: string
 *               parent:
 *                 type: string
 *             required:
 *               - name
 *               - slug
 *               - icon
 *               - parent
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
 * /category/list:
 *   get:
 *     summary: list of cateogry
 *     tags: [Category]
 *     description: Endpoint for cateogry list
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
