import SwiftUI

public enum LDCButtonSize {
  case sm, md, lg

  var cornerRadius: CGFloat {
    switch self {
      case .sm:
        return 6
      case .md:
        return 8
      case .lg:
        return 10
    }
  }

  var font: Font {
    switch self {
      case .sm:
        return Font.system(size: 12, weight: .medium).smallCaps()
      case .md:
        return Font.system(size: 14, weight: .medium).smallCaps()
      case .lg:
        return Font.system(size: 18, weight: .medium).smallCaps()
    }
  }

  var minWidth: CGFloat {
    switch self {
      case .sm:
        return 54
      case .md:
        return 64
      case .lg:
        return 74
    }
  }

  var paddingX: CGFloat {
    switch self {
      case .sm:
        return 8
      case .md:
        return 12
      case .lg:
        return 14
    }
  }

  var paddingY: CGFloat {
    switch self {
      case .sm:
        return 6
      case .md:
        return 10
      case .lg:
        return 10
    }
  }

  var tracking: CGFloat {
    switch self {
      case .sm:
        return 1.10
      case .md:
        return 1.25
      case .lg:
        return 1.30
    }
  }
}

struct LDCButtonStyle: ButtonStyle {
  var disabled: Bool
  var size: LDCButtonSize
  var skin: LDCColor

  func makeBody (configuration: Self.Configuration) -> some View {
    configuration.label
      .font(self.size.font)
      .multilineTextAlignment(.center)
      .foregroundColor(Color.white)
      .colorMultiply(self.skin.on.default)
      .padding([.bottom, .top], self.size.paddingY)
      .padding([.leading, .trailing], self.size.paddingX)
      .frame(minWidth: self.size.minWidth)
      .background(configuration.isPressed ? self.skin.tap : self.skin.default)
      .cornerRadius(self.size.cornerRadius)
      .opacity(self.disabled ? 0.5 : 1)
      .animation(.easeInOut(duration: 0.15))
  }
}

public struct LDCButton<Label>: View where Label : View {
  private var action: () -> Void
  private var disabled: Bool = false
  private var label: Label
  private var size: LDCButtonSize = .md
  private var skin: LDCColor = .black

  public var body: some View {
    Button(action: self.action) {
      self.label
    }
    .buttonStyle(
      LDCButtonStyle(disabled: self.disabled, size: self.size, skin: self.skin)
    )
    .disabled(self.disabled)
  }

  public init (action: @escaping () -> Void = {}, @ViewBuilder label: () -> Label) {
    self.action = action
    self.label = label()
  }

  private init (_ view: LDCButton) {
    self.action = view.action
    self.disabled = view.disabled
    self.label = view.label
    self.size = view.size
    self.skin = view.skin
  }

  public func disabled (_ disabled: Bool) -> LDCButton {
    var view = LDCButton(self)
    view.disabled = disabled

    return view
  }

  public func size (_ size: LDCButtonSize) -> LDCButton {
    var view = LDCButton(self)
    view.size = size

    return view
  }

  public func skin (_ skin: LDCColor) -> LDCButton {
    var view = LDCButton(self)
    view.skin = skin

    return view
  }
}

extension LDCButton where Label == Text {
  public var body: some View {
    Button(action: self.action) {
      self.label.tracking(self.size.tracking)
    }
    .buttonStyle(
      LDCButtonStyle(disabled: self.disabled, size: self.size, skin: self.skin)
    )
    .disabled(self.disabled)
  }


  public init<S> (_ title: S, action: @escaping () -> Void = {}) where S : StringProtocol {
    self.action = action
    self.label = Text(title)
  }
}

struct LDCButton_Previews: PreviewProvider {
  static var previews: some View {
    LDCButton("Button")
  }
}
