# Music Player

A music player UI inspired by Apple Music, built with React Native and Expo. It plays a sample library of songs with background audio, a searchable song list and a floating mini player.

## Features

- **Songs** tab with the full library and a search bar in the header
- Artwork, title and artist for each track, with a fallback image when artwork is missing
- Active track highlighted, with an animated "playing" indicator or a play icon when paused
- Floating mini player above the tab bar: artwork, scrolling title for long names, play/pause and skip to next
- Tapping a song queues the visible list, so skipping moves through the songs; the queue repeats
- Background audio on iOS
- Blurred tab bar with **Favorites**, **Playlists**, **Songs** and **Artists** tabs

Favorites, Playlists and Artists are placeholder screens for now.

## Tech stack

Expo SDK 51, React Native 0.74, Expo Router (file-based tabs), TypeScript, `react-native-track-player`, `react-native-fast-image`, `react-native-reanimated`, `expo-blur`.

## Getting started

Requirements: [Bun](https://bun.sh), Xcode with CocoaPods, and an iOS simulator or device.

The app uses native modules (track player, fast image), so it needs a development build and does not run in Expo Go.

```bash
bun install
bun ios            # build and run on the simulator
bun ios --device   # build and run on a connected iPhone
```

To run on a real device, pick your own Apple team in Xcode (Signing & Capabilities) and, if needed, change the bundle identifier (`com.example.musicplayer`) in `app.json` and the iOS project.

## Sample data

The library lives in `assets/data/library.json`. Each track has a `url`, `title`, and optional `artist`, `artwork`, `rating` and `playlist` fields. The sample uses royalty-free tracks hosted online, so playback needs an internet connection.

## Project structure

```
src/
├── app/
│   ├── _layout.tsx          # Track player setup, splash screen, root stack
│   └── (tabs)/              # favorites, playlists, (songs), artists
├── components/              # TracksList, TrackListItem, FloatingPlayer, PlayerControls, MovingText
├── hooks/                   # track player setup, search bar, last active track, state logging
├── helpers/                 # search filters, types
├── constants/               # colors, font sizes, images, layout
└── styles/
```
