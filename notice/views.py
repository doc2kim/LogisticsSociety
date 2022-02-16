from .models import Notice
from .serializers import NoticeSerializer
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter


class NoticeView(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer
    queryset = Notice.objects.all()
    permission_classes = [AllowAny]
    # SearchFilter 기반으로 검색
    filter_backends = [SearchFilter]
    # 어떤 칼럼을 기반으로 검색을 할 건지 search_fields에 *튜플* 형식으로 작성
    search_fields = ('title', 'writer', 'file__file',)


class DetailNoticeView(viewsets.ModelViewSet):
    serializer_class = NoticeSerializer
    queryset = Notice.objects.all()
    permission_classes = [AllowAny]

# 조회수 카운팅 구현 DetailNotice api 요청시 카운팅 됨
# 추후 유저 Ip 확인하여 중복 카운팅을 막아야함

    def retrieve(self, request, pk=None):
        queryset = Notice.objects.all()
        # [중요] 요청된 pk값으로 d/b의 요청한 공지 object를 가져온다.
        notice = get_object_or_404(queryset, pk=pk)
        notice.hits = notice.hits + 1
        notice.save(update_fields=("hits", ))
        serializer = NoticeSerializer(notice)
        return Response(serializer.data)