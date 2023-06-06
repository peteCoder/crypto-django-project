from django.contrib import admin
from .models import (
    Newsletter,
    ContactUs,
    AdminWalletAccount,
    Account,
    Withdrawal,
    Transfer,
    Transaction
    
)

# Register your models here.

admin.site.register(Newsletter)
admin.site.register(Transaction)
admin.site.register(Account)
admin.site.register(ContactUs)
admin.site.register(AdminWalletAccount)
admin.site.register(Withdrawal)
admin.site.register(Transfer)




