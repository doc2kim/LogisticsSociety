from .models import Conference, Keynote, Normal, Compete, Author, Image
from rest_framework import serializers



class ImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Image
        fields = '__all__'



class AuthorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Author
        fields = '__all__'
        
        
class KeynoteSerializer(serializers.ModelSerializer):
    presenter = AuthorSerializer(read_only=True)
    co_author = AuthorSerializer(read_only=True, many=True)
    
    class Meta:
        model = Keynote
        fields = '__all__'
        
        
class NormalSerializer(serializers.ModelSerializer):
    presenter = AuthorSerializer(read_only=True)
    co_author = AuthorSerializer(read_only=True, many=True)
    advisor = AuthorSerializer(read_only=True)
    
    class Meta:
        model = Normal
        fields = '__all__'
        
        
class CompeteSerializer(serializers.ModelSerializer):
    presenter = AuthorSerializer(read_only=True)
    co_author = AuthorSerializer(read_only=True, many=True)
    advisor = AuthorSerializer(read_only=True)
    
    class Meta:
        model = Compete
        fields = '__all__'
        
        
class ConferenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Conference
        fields = '__all__'
        
    keynote = KeynoteSerializer(read_only=True, many=True)
    normal = NormalSerializer(read_only=True, many=True)
    compete = CompeteSerializer(read_only=True, many=True)
    image = ImageSerializer(read_only=True, many=True)
    