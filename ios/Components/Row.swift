import SwiftUI

public struct LDCRow<Content>: View where Content : View {
  public typealias Col = LDCCol<Content>

  private var columns: [LDCCol<Content>]
  private var noGutters: Bool = false

  public var body: some View {
    LDCParentSize { parentSize in
      HStack (spacing: self.noGutters ? LDCSpacing.zero : LDCSpacing.four) {
        ForEach (self.columns) {
          $0.parentSize(parentSize)
        }
      }
      .frame(maxWidth: .infinity)
    }
  }

  public init (@ViewBuilder column: () -> Col) {
    self.columns = [column()]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6, cols.7]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6, cols.7, cols.8]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6, cols.7, cols.8, cols.9]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6, cols.7, cols.8, cols.9, cols.10]
  }

  public init (@ViewBuilder columns: () -> TupleView<(Col, Col, Col, Col, Col, Col, Col, Col, Col, Col, Col, Col)>) {
    let cols = columns().value
    self.columns = [cols.0, cols.1, cols.2, cols.3, cols.4, cols.5, cols.6, cols.7, cols.8, cols.9, cols.10, cols.11]
  }

  private init (_ view: LDCRow) {
    self.columns = view.columns
    self.noGutters = view.noGutters
  }

  public func noGutters (_ noGutters: Bool) -> LDCRow {
    var view = LDCRow(self)
    view.noGutters = noGutters

    return view
  }
}

struct LDCRow_Previews: PreviewProvider {
  static var previews: some View {
    LDCRow {
      LDCCol {
        LDCText("Col")
      }
      LDCCol {
        LDCText("Col")
      }
      LDCCol {
        LDCText("Col")
      }
    }
  }
}
