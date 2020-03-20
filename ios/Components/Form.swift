import SwiftUI

public struct LDCForm<Content>: View where Content : View {
  private var content: Content

  public var body: some View {
    VStack {
      self.content
    }
  }

  public init (@ViewBuilder content: () -> Content) {
    self.content = content()
  }
}

struct LDCForm_Previews: PreviewProvider {
  static var previews: some View {
    LDCForm {
      LDCFormText("Form Text")
    }
  }
}
