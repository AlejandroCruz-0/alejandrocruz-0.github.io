---
title: 'Install multimedia codecs in Fedora 40-4X for watching Youtube and multimedia files'
description: 'Multimedia packages in Fedora'
pubDate: 'Jul 27 2025'
heroImage: '/blog/fedora-codecs.png'
---

I installed Fedora 40 awhile back but i did not know it didn't come with multimedia codecs. That means no YouTube or any other multimedia videos. This is because they only ship free software, so no propietary packages. After some research, I came up with the following steps, and it worked, so give it a try. I have now updated to Fedora 42 and i continue to have no problems, but your experience may​ differ.

## Disable rawhide repo if enabled

`dnf config-manager --set-disabled rpmfusion-free-rawhide`

## Enable rpmfusion repo

`dnf config-manager --set-enabled rpmfusion-free`

## Refresh repos

`dnf update --refresh`

## Install codecs

`dnf install @multimedia @sound-and-video ffmpeg-libs gstreamer1-plugins-{bad-*,good-*,base} gstreamer1-plugin-openh264 gstreamer1-libav lame* --allowerasing`

---

### Further reading

RPM fusion docs [docs](https://rpmfusion.org/Howto/Multimedia)

Official docs for multimedia install [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/installing-plugins-for-playing-movies-and-music/)

Easy install of third party packages [Fedy](https://github.com/rpmfusion-infra/fedy)



