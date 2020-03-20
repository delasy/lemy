// swift-tools-version:5.3

import PackageDescription

let package = Package(
  name: "LemyUI",
  platforms: [
    .iOS(.v13), .macOS(.v10_15)
  ],
  products: [
    .library(name: "LemyUI", targets: ["LemyUI"])
  ],
  targets: [
    .target(name: "LemyUI", path: "Components")
  ]
)
