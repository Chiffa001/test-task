export default class Service {
    base = "https://api.github.com/";

    async _getResource(path = "", method = "GET") {
        const res = await fetch(`${this.base}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) throw new Error("error when executing the request");
        const body = await res.json();
        return body;
    }

    getUser = async (login) => {
        let user = await this._getResource(`users/${login}`);
        user = await this._formatUser(user);
        return user;
    };

    _formatUser = (user) => {
        const {id, login, avatar_url} = user;
        return {
            id,
            login,
            avatar_url,
        };
    };
}
