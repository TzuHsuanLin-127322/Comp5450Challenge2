import { ContactMeItem, useGuestbookViewHolder } from "@/viewModels/guestbookViewHolder";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";

export default function GuestbookModal() {
  const { guestbook, deleteGuestBookItem } = useGuestbookViewHolder()
  const [selectedItem, setSelectedItem] = useState<ContactMeItem | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  if (guestbook.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No guestbook entries</Text>
      </View>
    )
  }

  const onCloseModal = () => {
    setIsModalVisible(false)
    setSelectedItem(null)
  }

  const messageDetailModal = (
    <Modal
      visible={isModalVisible}
      backdropColor={'#00000040'}
      onRequestClose={onCloseModal}
    >
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        <View style={{width: '80%', backgroundColor: 'white', padding: 16, borderRadius: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Message Detail</Text>
            <TouchableOpacity onPress={onCloseModal}>
              <Ionicons name="close" size={24} color='black' />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 8}}>Name:</Text>
            <Text style={{fontSize: 14}}>{selectedItem?.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 8}}>Email:</Text>
            <Text style={{fontSize: 14}}>{selectedItem?.email}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 8}}>Phone Number:</Text>
            <Text style={{fontSize: 14}}>{selectedItem?.phone}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 8}}>Purpose:</Text>
            <Text style={{fontSize: 14}}>{selectedItem?.purpose}</Text>
          </View>

          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>Message:</Text>
          <Text>{selectedItem?.message}</Text>
        </View>
      </View>
      
    </Modal>
  )

  const makeCard = (item: ContactMeItem) => (
    <View
      key={item.id}
      style={{
        flexDirection: 'row',
        backgroundColor:
        'white',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'flex-end', marginRight: 8}}>
        <Text style={{fontWeight: 'bold'}}>Name:</Text>
        <Text style={{fontWeight: 'bold'}}>Email:</Text>
        <Text style={{fontWeight: 'bold'}}>Phone:</Text>
        <Text style={{fontWeight: 'bold'}}>Purpose:</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.phone}</Text>
        <Text>{item.purpose}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', padding: 8}}>
        <TouchableOpacity
          style={{padding: 8}}
          onPress={() => deleteGuestBookItem(item.id)}
        >
          <Ionicons name="trash" size={24} color='red' />
        </TouchableOpacity>
        {!!item.message && (
          <TouchableOpacity 
            style={{padding: 8}}
            onPress={() => {
              setSelectedItem(item)
              setIsModalVisible(true)
            }}
          >
            <Ionicons name="mail" size={24} color='black' />
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  )

  return (
    <>
      <FlatList
        style={{flex: 1, padding: 16}}
        data={guestbook}
        renderItem={({ item }) => makeCard(item)}
      />
      {messageDetailModal}
    </>
    
  )
}