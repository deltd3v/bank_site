(async function main()  {
    // read fake user data from json file
	const data = await require("fs").promises.readFile(
		`${__dirname}/users.json`,
		{ encoding: "utf-8" }
	);

    let /**@type {Array<User>} */ users = JSON.parse(await data);
    console.log(users)
})(0);

/**
 * @typedef User - fake user model
 * @type {object}
 * @property {string} userName - user's username.
 * @property {string} email - user's name.
 * @property {number} passWord - user's age.
 * @property {string} avatar - user's avatar.
 * @property {string} age - user's age.
 */
