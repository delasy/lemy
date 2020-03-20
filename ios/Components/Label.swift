import SwiftUI

public struct LDCLabel<S>: View where S : StringProtocol {
  private var color: LDCColor = .black
  private var content: S

  public var body: some View {
    Text(self.content)
      .font(.system(size: 16, weight: .regular))
      .tracking(0.15)
      .foregroundColor(self.color.default)
      .frame(maxWidth: .infinity, maxHeight: 18 + 5, alignment: .topLeading)
  }

  public init (_ content: S) {
    self.content = content
  }

  private init (_ view: LDCLabel) {
    self.content = view.content
  }

  public func background (_ color: LDCColor) -> LDCLabel {
    var view = LDCLabel(self)
    view.color = color

    return view
  }
}

struct LDCLabel_Previews: PreviewProvider {
  static var previews: some View {
    LDCLabel("Label")
  }
}
