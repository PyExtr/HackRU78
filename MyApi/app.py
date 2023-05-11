import os
from flask import Flask
from flask_migrate import Migrate
from flask_smorest import Api
from flask_cors import CORS

from db import db
from Resources.ai import blp as aiBlueprint


def create_app(db_url = None):
    app = Flask(__name__)
    CORS(app)


    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "Aigent"
    app.config["API_VERSION"] = "v0.01"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or os.getenv("DATABASE_URL", "sqlite:///data.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    migrate = Migrate(app, db, compare_type=True)
    api = Api(app)

    api.register_blueprint(aiBlueprint)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(port=9080)