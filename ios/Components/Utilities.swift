import SwiftUI

public enum LDCColor {
  case black, error, primary, secondary, white

  var `default`: Color {
    switch self {
      case .black:
        return Color(red: 0.00, green: 0.00, blue: 0.00)
      case .error:
        return Color(red: 0.69, green: 0.00, blue: 0.13)
      case .primary:
        return Color(red: 0.40, green: 0.19, blue: 0.71)
      case .secondary:
        return Color(red: 0.63, green: 0.84, blue: 0.89)
      case .white:
        return Color(red: 1.00, green: 1.00, blue: 1.00)
    }
  }

  var tap: Color {
    switch self {
      case .black:
        return Color(red: 0.30, green: 0.30, blue: 0.30)
      case .error:
        return Color(red: 0.80, green: 0.36, blue: 0.40)
      case .primary:
        return Color(red: 0.58, green: 0.44, blue: 0.80)
      case .secondary:
        return Color(red: 0.45, green: 0.59, blue: 0.62)
      case .white:
        return Color(red: 0.70, green: 0.70, blue: 0.70)
    }
  }

  var on: LDCColor {
    switch self {
      case .black, .error, .primary:
        return .white
      case .secondary, .white:
        return .black
    }
  }
}

public struct LDCParentSize<Content>: View where Content : View {
  @State private var parentSize: CGSize?

  private var content: (CGSize) -> Content

  @ViewBuilder public var body: some View {
    if self.parentSize == nil {
      GeometryReader { (geometry) -> Path in
        DispatchQueue.main.async {
          self.parentSize = geometry.size
        }

        return Path()
      }
    } else {
      self.content(self.parentSize!)
    }
  }

  public init (@ViewBuilder content: @escaping (CGSize) -> Content) {
    self.content = content
  }
}

public struct LDCSpacing {
  public static let zero: CGFloat = 0
  public static let one: CGFloat = 5
  public static let two: CGFloat = 10
  public static let three: CGFloat = 15
  public static let four: CGFloat = 20
  public static let five: CGFloat = 25
}
