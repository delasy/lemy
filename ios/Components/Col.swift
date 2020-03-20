import SwiftUI

public enum LDCColSize {
  case `default`, auto, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve

  func getWidth (_ parentSize: CGSize) -> CGFloat? {
    switch self {
      case .default:
        return .infinity
      case .auto:
        return nil
      case .one:
        return parentSize.width / 12
      case .two:
        return (parentSize.width / 12) * 2
      case .three:
        return (parentSize.width / 12) * 3
      case .four:
        return (parentSize.width / 12) * 4
      case .five:
        return (parentSize.width / 12) * 5
      case .six:
        return (parentSize.width / 12) * 6
      case .seven:
        return (parentSize.width / 12) * 7
      case .eight:
        return (parentSize.width / 12) * 8
      case .nine:
        return (parentSize.width / 12) * 9
      case .ten:
        return (parentSize.width / 12) * 10
      case .eleven:
        return (parentSize.width / 12) * 11
      case .twelve:
        return parentSize.width
    }
  }
}

public struct LDCCol<Content>: Identifiable, View where Content: View {
  public let id = UUID()
  private var content: Content
  private var parentSize: CGSize = .zero
  private var size: LDCColSize

  public var body: some View {
    VStack {
      self.content
    }
    .frame(maxWidth: self.size == .default ? self.size.getWidth(self.parentSize) : nil)
    .frame(width: self.size == .default ? nil : self.size.getWidth(self.parentSize))
  }

  public init (_ size: LDCColSize = .default, @ViewBuilder content: () -> Content) {
    self.content = content()
    self.size = size
  }

  private init (_ view: LDCCol) {
    self.content = view.content
    self.parentSize = view.parentSize
    self.size = view.size
  }

  func parentSize (_ parentSize: CGSize) -> LDCCol {
    var view = LDCCol(self)
    view.parentSize = parentSize

    return view
  }
}

struct LDCCol_Previews: PreviewProvider {
  static var previews: some View {
    LDCRow {
      LDCCol(.six) {
        LDCText("Col")
      }
      LDCCol(.auto) {
        LDCText("Col")
      }
      LDCCol {
        LDCText("Col")
      }
    }
  }
}
