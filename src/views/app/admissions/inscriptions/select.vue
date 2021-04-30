<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <div class="top-right-button-container">
          <b-button
            v-b-modal.modalright
            variant="primary"
            size="lg"
            class="top-right-button"
            :to="{ path: 'add' }"
            >{{ $t("pages.add-new") }}</b-button
          >
        </div>
        <piaf-breadcrumb :heading="$t('menu.inscriptions')" />
        <div class="mb-2 mt-2">
          <b-button
            variant="empty"
            class="pt-0 pl-0 d-inline-block d-md-none"
            v-b-toggle.displayOptions
          >
            {{ $t("pages.display-options") }}
            <i class="simple-icon-arrow-down align-middle" />
          </b-button>
          <b-collapse id="displayOptions" class="d-md-block">
            <div class="d-block d-md-inline-block pt-1">
              <b-dropdown
                id="ddown1"
                :text="`${$t('pages.orderby')} ${sort.label}`"
                variant="outline-dark"
                class="mr-1 float-md-left btn-group"
                size="xs"
              >
                <b-dropdown-item
                  v-for="(order, index) in sortOptions"
                  :key="index"
                  @click="changeOrderBy(order)"
                  >{{ order.label }}</b-dropdown-item
                >
              </b-dropdown>

              <div
                class="search-sm d-inline-block float-md-left mr-1 align-top"
              >
                <b-input :placeholder="$t('menu.search')" v-model="filter" />
              </div>
            </div>
            <div class="float-md-right pt-1">
              <span class="text-muted text-small mr-1 mb-2"
                >Total : {{ rows }}</span
              >
              <b-dropdown
                id="ddown2"
                right
                :text="`${perPage}`"
                variant="outline-dark"
                class="d-inline-block"
                size="xs"
              >
                <b-dropdown-item
                  v-for="(size, index) in pageSizes"
                  :key="index"
                  @click="changePageSize(size)"
                  >{{ size }}</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </b-collapse>
        </div>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <b-table
            ref="datos"
            striped
            :busy="isBusy"
            :per-page="perPage"
            :items="posts"
            :fields="fields"
            :filter="filter"
            :current-page="currentPage"
          >
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template v-slot:cell(actions)="data">
              <router-link
                :to="{
                  name: 'categories-update',
                  params: { id: `${data.item.id_categoria}` },
                }"
                ><b-button variant="primary">Edit</b-button></router-link
              >
            </template>
          </b-table>
          <b-pagination
            ref="pagination"
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../../../constants/config";
export default {
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  data() {
    return {
      isBusy: true,
      selected: [],
      filter: "",
      perPage: 4,
      currentPage: 1,
      posts: [],
      fields: [
        "id",
        "identificacion",
        "nombres",
        "apellidos",
        "convocatoria",
        "estado",
        "actions",
      ],
      changeOrderBy: "",
      sort: "",
      sortOptions: [
        {
          column: "identificacion",
          label: "Identificacion",
        },
        {
          column: "category",
          label: "Category",
        },
        {
          column: "status",
          label: "Status",
        },
      ],
      pageSizes: [4, 8, 12],
    };
  },
  methods: {
    changePageSize(perPage) {
      this.perPage = perPage;
      this.$refs.datos.$forceUpdate();
    },
  },
  mounted() {
    axios.get(apiUrl + "/categorias/").then((response) => {
      this.posts = response.data;
      this.isBusy = false;
    });
  },
};
</script>

<style>
</style>