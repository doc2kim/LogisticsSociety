from .models import Icasl, Session3, Session2, Session1, Keynote, Paper, Author, Commissioner
from rest_framework import serializers



class CommissionerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Commissioner
        fields = '__all__'



class AuthorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Author
        fields = '__all__'
        
class PaperSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True, many=True)
    class Meta:
        model = Paper
        fields = '__all__'
        
        
class KeynoteSerializer(serializers.ModelSerializer):
    presenter =  AuthorSerializer(read_only=True)
    author = AuthorSerializer(read_only=True, many=True)
    
    class Meta:
        model = Keynote
        fields = '__all__'
        
        
class Session1Serializer(serializers.ModelSerializer):
    chair = CommissionerSerializer(read_only=True)
    paper = PaperSerializer(read_only=True, many=True)
    
    class Meta:
        model = Session1
        fields = '__all__'
        
class Session2Serializer(serializers.ModelSerializer):
    chair = CommissionerSerializer(read_only=True)
    paper = PaperSerializer(read_only=True, many=True)
    
    class Meta:
        model = Session2
        fields = '__all__'
        
class Session3Serializer(serializers.ModelSerializer):
    chair = CommissionerSerializer(read_only=True)
    paper = PaperSerializer(read_only=True, many=True)
    
    class Meta:
        model = Session3
        fields = '__all__'

        
        
class IcaslSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Icasl
        fields = '__all__'
        
    chairman= CommissionerSerializer(read_only=True, many=True)
    convenor= CommissionerSerializer(read_only=True, many=True)
    advisory= CommissionerSerializer(read_only=True, many=True)
    coordinators= CommissionerSerializer(read_only=True, many=True)
    secretarles= CommissionerSerializer(read_only=True, many=True)
    staff= CommissionerSerializer(read_only=True, many=True)
    keynote = KeynoteSerializer(read_only=True)
    session1 = Session1Serializer(read_only=True)
    session2 = Session1Serializer(read_only=True)
    session3 = Session1Serializer(read_only=True)