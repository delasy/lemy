import SwiftUI

public enum LDCTextVariant {
  case h1, h2, h3, h4, h5, h6, s1, s2, b1, b2

  var font: Font {
    switch self {
      case .h1:
        return Font.system(size: 60, weight: .ultraLight)
      case .h2:
        return Font.system(size: 48, weight: .ultraLight)
      case .h3:
        return Font.system(size: 38, weight: .regular)
      case .h4:
        return Font.system(size: 30, weight: .regular)
      case .h5:
        return Font.system(size: 24, weight: .regular)
      case .h6:
        return Font.system(size: 20, weight: .medium)
      case .s1:
        return Font.system(size: 16, weight: .regular)
      case .s2:
        return Font.system(size: 14, weight: .regular)
      case .b1:
        return Font.system(size: 16, weight: .regular)
      case .b2:
        return Font.system(size: 14, weight: .regular)
    }
  }

  var tracking: CGFloat {
    switch self {
      case .h1:
        return -0.50
      case .h2:
        return 0.00
      case .h3:
        return 0.25
      case .h4:
        return 0.15
      case .h5:
        return 0.00
      case .h6:
        return 0.15
      case .s1:
        return 0.15
      case .s2:
        return 0.10
      case .b1:
        return 0.50
      case .b2:
        return 0.25
    }
  }
}

public struct LDCText<S>: View where S : StringProtocol {
  private var color: LDCColor = .black
  private var content: S
  private var variant: LDCTextVariant = .b1

  public var body: some View {
    Text(self.content)
      .font(self.variant.font)
      .tracking(self.variant.tracking)
      .foregroundColor(self.color.default)
  }

  public init (_ content: S) {
    self.content = content
  }

  private init (_ view: LDCText) {
    self.color = view.color
    self.content = view.content
    self.variant = view.variant
  }

  public func color (_ color: LDCColor) -> LDCText {
    var view = LDCText(self)
    view.color = color

    return view
  }

  public func variant (_ variant: LDCTextVariant) -> LDCText {
    var view = LDCText(self)
    view.variant = variant

    return view
  }
}

struct LDCText_Previews: PreviewProvider {
  static var previews: some View {
    LDCText("Text")
  }
}
