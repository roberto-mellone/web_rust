# Create your models here.

from django.db import models

class Note(models.Model):
    """
    Classe che serve a creare le note del notepadd

        Parameters
        -------

        title: (str), il titolo della nota 
        content: (str), il contenuto della nota 
        date_creations: (datetime), data in cui è stata creata la nota 

        Returns
        -------
        in corso di creazione il returns 

    """

    title=models.CharField(max_length=255)
    content=models.TextField()
    data_creations=models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return super().__str__()

