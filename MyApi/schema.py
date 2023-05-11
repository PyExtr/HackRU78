from marshmallow import Schema, fields


class OutputSchema(Schema):
    id = fields.Integer(dump_only=True)
    customer_name = fields.String(required=True, unique=True)
    conversation = fields.String(required=True)
    summary = fields.String(required=True)
    personalization = fields.String(required=True)
    technical = fields.String(required=True)


