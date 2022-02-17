from django.core.management.base import BaseCommand
from users.models import User


class Command(BaseCommand):

    help = "This command This command creates superuser"

    def handle(self, *args, **options):
        admin = User.objects.filter(email="master@shipping.or.kr")
        if not admin:
            User.objects.create_superuser("master@shipping.or.kr","master","shipping9153!")
            self.stdout.write(self.style.SUCCESS("Superuser Created"))
        else:
            self.stdout.write(self.style.SUCCESS("Superuser Exists"))