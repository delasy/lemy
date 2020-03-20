import SwiftUI

public struct LDCView<Content>: View where Content : View {
  private var background: LDCColor = .white
  private var content: Content

  public var body: some View {
    self.content
      .background(self.background.default)
  }

  public init (@ViewBuilder content: () -> Content) {
    self.content = content()
  }

  private init (_ view: LDCView) {
    self.content = view.content
  }

  public func background (_ background: LDCColor) -> LDCView {
    var view = LDCView(self)
    view.background = background

    return view
  }
}

struct LDCView_Previews: PreviewProvider {
  static var previews: some View {
    LDCView {
      LDCText("Text")
    }
  }
}
