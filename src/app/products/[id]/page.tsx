// app/product/[id]/page.tsx

export default async function Product({ params }: { params: { id: string } }) {
  // 确保使用await来获取params
  const { id } = await params;

  // 现在你可以使用id了
  // 这里你可以进行任何需要的服务器端数据获取
  // 例如，从数据库或API获取产品信息

  return <h1>Product: {id}</h1>;
}
