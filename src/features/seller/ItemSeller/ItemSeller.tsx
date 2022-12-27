import Avatar from 'common/components/Avatar/Avatar';
import Button from 'common/components/Button';
import Card from 'common/components/Card/Card';
import FormInput from 'common/components/FormInput/FormInput';
import Modal from 'common/components/Modal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateItemMutation, useGetItemsQuery } from 'services/items.api';
import { ItemsModel } from './types';

const ItemSeller = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const { data: itemsData } = useGetItemsQuery('');
  const [createItem, { isLoading, isError, isSuccess }] =
    useCreateItemMutation();

  const inputStyle =
    'border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm h-10 w-full text-lg px-2 mt-2 mb-4';

  const handleSaveItem = async (formValues: ItemsModel) => {
    await createItem(formValues);
  };

  const ItemCards = () => {
    return (
      <div className="flex flex-wrap columns-3 h-auto">
        {itemsData?.data?.map((item: any) => {
          return (
            <div className="w-1/3 px-5 py-5 h-auto">
              <Card
                children={
                  <div className="p-5">
                    <div className="text-lg capitalize">{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.category}</div>
                    <div>{item.number_of_items}</div>
                    <div>{item.price}</div>
                  </div>
                }
                width="w-full"
                height="h-auto"
                otherClass="px-10 border-2 border-blue-400 rounded-md"
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-16 justify-end pr-14 my-8">
        <Button
          width="w-32"
          height="h-10"
          className="bg-blue-600"
          children={
            <div className="text-white text-md font-semibold">Add Item</div>
          }
          onClick={() => setModalOpen(true)}
        />
      </div>
      <div className="">
        <Modal
          modalOpen={modalOpen}
          handleModal={() => setModalOpen((prev) => !prev)}
        >
          <div>
            <div className="flex flex-wrap w-full h-auto p-5 overflow-y-auto">
              <div className="w-2/6">
                <div className="flex justify-center items-center mx-auto ">
                  <Avatar
                    src="https://www.vocaleurope.eu/wp-content/uploads/no-image.jpg"
                    shape="square"
                    size="w-32 h-auto"
                  />
                </div>
              </div>
              <div className="w-4/6 h-auto">
                <form onSubmit={handleSubmit(handleSaveItem)}>
                  <FormInput
                    label="Name"
                    inputClass={inputStyle}
                    name="name"
                    register={register}
                  />
                  <FormInput
                    label="Description"
                    inputClass={inputStyle}
                    name="description"
                    register={register}
                  />
                  <FormInput
                    label="Item Category"
                    inputClass={inputStyle}
                    name="category"
                    register={register}
                  />
                  <FormInput
                    label="Number of Items"
                    inputClass={inputStyle}
                    name="number_of_items"
                    register={register}
                    type="number"
                  />
                  <FormInput
                    label="Price"
                    inputClass={inputStyle}
                    name="price"
                    register={register}
                    type="number"
                  />
                  <Button type="submit" children="Save" />
                </form>
              </div>
            </div>
          </div>
        </Modal>
        <div>
          <ItemCards />
        </div>
      </div>
    </div>
  );
};

export default ItemSeller;
