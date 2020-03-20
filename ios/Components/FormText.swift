import SwiftUI

public struct LDCFormText<S>: View where S : StringProtocol {
  private var color: LDCColor = .black
  private var content: S

  public var body: some View {
    Text(self.content)
      .font(.system(size: 12, weight: .regular))
      .tracking(0.4)
      .foregroundColor(self.color.default)
      .frame(maxWidth: .infinity, maxHeight: 16 + 5, alignment: .bottomLeading)
  }

  public init (_ content: S) {
    self.content = content
  }

  private init (_ view: LDCFormText) {
    self.content = view.content
  }

  public func background (_ color: LDCColor) -> LDCFormText {
    var view = LDCFormText(self)
    view.color = color

    return view
  }
}

struct LDCFormText_Previews: PreviewProvider {
  static var previews: some View {
    LDCFormText("Form Text")
  }
}
