FROM ubuntu:latest

LABEL author="yahaya"
LABEL description="just a practice docker app"

# WORKDIR /workarea

COPY hello.py .

RUN apt-get update && apt-get install -y \
    python
    # python-pyside \
    # python-pip \
    # python3-pip \
    # python3-pyqt5

CMD python hello.py

