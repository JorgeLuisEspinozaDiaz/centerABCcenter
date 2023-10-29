import { Generals, GeneralsData } from '@/interfaces/general'
import { Multilanguage, MultilanguageData } from '@/interfaces/multilanguage'
import { baseApi } from '@/lib/baseApi'
import { create } from 'zustand'

interface GeneralState {
   generals: GeneralsData
   multilanguage: MultilanguageData
   getGenerals: () => Promise<void>
}

export const useGeneralStore = create<GeneralState>((set) => ({
   generals: {
      id: 1,
      address: '',
      phone: '',
      email: '',
      date: '',
      pixel_facebook: '',
      facebook_id: '',
      tag_manager: '',
      url_map: '',
      cell_phone: '',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      logo: {
         id: 10,
         name: '',
         alternativeText: '',
         caption: '',
         width: 0,
         height: 0,
         formats: null,
         hash: '',
         ext: '',
         mime: '',
         size: 0,
         url: '',
         previewUrl: null,
         provider: '',
         provider_metadata: null,
         createdAt: '',
         updatedAt: '',
      },
      logo_mobile: {
         id: 10,
         name: '',
         alternativeText: '',
         caption: '',
         width: 0,
         height: 0,
         formats: null,
         hash: '',
         ext: '',
         mime: '',
         size: 0,
         url: '',
         previewUrl: null,
         provider: '',
         provider_metadata: null,
         createdAt: '',
         updatedAt: '',
      },
      social_networks: [],
   },
   multilanguage: {
      id: 1,
      lbl_contact_us: '',
      lbl_read_more: '',
      lbl_send: '',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      menu: [],
   },

   getGenerals: async () => {
      try {
         const [{ data: general }, { data: multilanguage }] = await Promise.all([
            baseApi.get(`/general?populate=deep`),
            baseApi.get(`/multilanguage?populate=deep`),
         ])

         set((state) => ({
            ...state,
            generals: general.data,
            multilanguage: multilanguage.data,
         }))
      } catch (error) {
         console.error('Error fetching generals:', error)
      }
   },
}))
