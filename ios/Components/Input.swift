import SwiftUI

public struct LDCInput: View {
  @State private var focused: Bool = false

  private var disabled: Bool = false
  private var placeholder: String = ""
  private var skin: LDCColor = .black
  private var type: UIKeyboardType = .default
  private var value: Binding<String>

  public var body: some View {
    TextField(self.placeholder, text: self.value) { editingChanged in
      self.focused = editingChanged
    }
    .font(.system(size: 16, weight: .regular))
    .keyboardType(self.type)
    .foregroundColor(self.skin.default)
    .padding([.bottom, .top], 9)
    .padding([.leading, .trailing], 12)
    .background(
      RoundedRectangle(cornerRadius: 8)
        .strokeBorder(!self.disabled && self.focused ? self.skin.tap : self.skin.default, lineWidth: 1)
    )
    .cornerRadius(8)
    .opacity(self.disabled ? 0.5 : 1)
    .animation(.easeInOut(duration: 0.15))
    .disabled(self.disabled)
  }

  public init (value: Binding<String>) {
    self.value = value
  }

  public init (_ placeholder: String, value: Binding<String>) {
    self.placeholder = placeholder
    self.value = value
  }

  private init (_ view: LDCInput) {
    self.disabled = view.disabled
    self.placeholder = view.placeholder
    self.skin = view.skin
    self.value = view.value
  }

  public func disabled (_ disabled: Bool) -> LDCInput {
    var view = LDCInput(self)
    view.disabled = disabled

    return view
  }

  public func skin (_ skin: LDCColor) -> LDCInput {
    var view = LDCInput(self)
    view.skin = skin

    return view
  }

  public func type (_ type: UIKeyboardType) -> LDCInput {
    var view = LDCInput(self)
    view.type = type

    return view
  }
}

struct LDCInput_Previews: PreviewProvider {
  static var previews: some View {
    LDCForm {
      LDCInput("Placeholder", value: .constant(""))
    }
  }
}
