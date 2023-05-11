from flask.views import MethodView
from flask_smorest import Blueprint, abort
from schema import OutputSchema

from db import db
from sqlalchemy.exc import SQLAlchemyError

from Models import SummaryModel

blp = Blueprint("AI", __name__, description="operation on AI conversions database")

@blp.route("/ai/<int:ticket_id>")
class get_ai_response(MethodView):
    @blp.response(200, OutputSchema)
    def get(self, ticket_id):
        response = SummaryModel.query.get_or_404(ticket_id)
        return response


@blp.route("/ai")
class create_ai(MethodView):
    @blp.arguments(OutputSchema)
    @blp.response(201, OutputSchema)
    def post(self, new_ai):
        new_ai_model = SummaryModel(**new_ai)
        try:
            db.session.add(new_ai_model)
            db.session.commit()
        except SQLAlchemyError as e:
            abort(400, message=str(e.__dict__['orig']))
        return new_ai


