<section className='bg-secondary_700'>
  <Container>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2 py-2">

      <h2 className='label3 text-gray_00 text-xs sm:text-sm md:text-base text-center sm:text-left'>
        Welcome to Clicon online eCommerce store.
      </h2>

      <div className="flex items-center gap-x-3 flex-wrap justify-center sm:justify-end">
        <h2 className='body_sm_400 text-gray_00 text-xs sm:text-sm'>
          Follow us:
        </h2>

        <div className="flex gap-x-2">
          {topNav.map((item) => (
            <span key={item.id} className='cursor-pointer'>
              <item.name size={16} className="sm:w-[18px] sm:h-[18px]" color="#fff" />
            </span>
          ))}
        </div>
      </div>

    </div>
  </Container>
</section>
