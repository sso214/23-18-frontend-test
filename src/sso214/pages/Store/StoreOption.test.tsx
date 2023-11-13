import { renderWithRouter } from '../../utils';

function renderStoreOption(storeId?: number, menuId?: number) {
  const STORE_ID = storeId | 1;
  const MENU_ID = menuId | 1;

  const result = renderWithRouter([`/store/${STORE_ID}/menu/${menuId}`]);

  return {
    STORE_ID,
    MENU_ID,
    result,
  };
}

describe('/store/:storeId/menu/:menuId', () => {
  it('해당 경로 접속 시, 화면이 올바르게 노출된다.', () => {
    // 메뉴 옵션 올바르게 노출되는지 체크
  });

  it('수량 초기값이 1로 노출된다.', () => {
    //
  });

  it('담기 버튼 클릭 시, 선택한 옵션이 장바구니에 담기고 /store/:storeId 경로로 이동한다.', () => {
    //
  });

  it('브라우저의 뒤로가기 버튼 클릭 시, 장바구니에는 변동이 없고 /store/:storeId 경로로 이동한다.', () => {
    window.history.back();
    //
  });
});

// 컴포넌트에서는 ProviderState에는 관여하지 않기 (컴포넌트 동작에만 충실)
// page단에서 ProviderState에 관여
