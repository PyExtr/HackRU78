"""empty message

Revision ID: e9637f54c95b
Revises: 
Create Date: 2023-05-12 00:52:30.715304

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e9637f54c95b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Summaries',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('customer_name', sa.String(length=80), nullable=False),
    sa.Column('conversation', sa.String(), nullable=False),
    sa.Column('summary', sa.String(), nullable=False),
    sa.Column('personalization', sa.String(), nullable=False),
    sa.Column('technical', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('customer_name', name='uix_1')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Summaries')
    # ### end Alembic commands ###
