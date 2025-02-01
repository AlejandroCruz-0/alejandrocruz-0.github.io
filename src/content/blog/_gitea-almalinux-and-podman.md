---
title: 'Self host git server with Gitea on almalinux using podman'
description: 'self hosting git server'
pubDate: 'January 20 2025'
heroImage: '/gitea-almalinux.jpg'
---

No matter if you are a fullstack developer or a system administrator, you need a place to save your code of dubious quality. You could always use any online git platform like github.com but not all features are free and maybe you want to have control and privacy

There are several options if you want to take the self host route, here are some of them:

- [Gogs](https://gogs.io/)
- [Gitlab](https://about.gitlab.com/install/)
- [GitBucket](https://gitbucket.github.io/)

I personally choose [Gitea](https://about.gitea.com/) because it is lightweight and straighforward. The following instruccions work on Alma Linux but should work on other RHEL Linux derivatives.

First install podman and make sure it runs with the following commands:

    dnf install -y podman
    podman -v
    podman run quay.io/podman/hello

![Podman install commands](/blog/alma-gitea-install-1.png)

Podman can work with compose files by emulating docker CLI using the package podman-docker, install it.

    dnf install -y podman-docker

Now install docker-compose

    sudo curl -SL https://github.com/docker/compose/releases/download/v2.28.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose \
    sudo chmod +x /usr/local/bin/docker-compose \
    docker-compose version


Activate podman socket

    systemctl --user enable --now podman.socket
    systemctl --user status podman.socket

Test podman's socket, it should return the message OK

    curl -w "\n" -H "Content-Type: application/json" --unix-socket /run/user/$UID/podman/podman.sock http://localhost/_ping

In order



### Further reading

[Use Compose Files with Podman on Oracle Linux](https://docs.oracle.com/en/learn/ol-podman-compose/)

[podman-compose](https://github.com/containers/podman-compose)

